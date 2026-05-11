'use client';

import { useEffect, useState } from 'react';
import { getTravelPlanById, TravelPlan, TravelItemModel } from '@/lib/travelPlanService';

interface PageProps {
  params: Promise<{ id: string }>;
}

interface TravelItem extends TravelItemModel {
  date?: string;
  arrivalTime?: string;
}

export default function TravelPlanDetailPage({ params }: PageProps) {
  const [plan, setPlan] = useState<TravelPlan | TravelItem[] | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    params.then(({ id }) => {
      getTravelPlanById(id)
        .then((data) => {
          setPlan(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    });
  }, [params]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTimeOfDay = (timeStr?: string): 'morning' | 'afternoon' | 'evening' | 'night' => {
    if (!timeStr) return 'morning';
    const hourStr = timeStr.replace(/\s*[AP]M/i, '').split(':')[0];
    const hour = parseInt(hourStr, 10);
    const isPM = /PM/i.test(timeStr);
    const adjustedHour = isPM && hour !== 12 ? hour + 12 : hour;
    if (adjustedHour >= 5 && adjustedHour < 12) return 'morning';
    if (adjustedHour >= 12 && adjustedHour < 17) return 'afternoon';
    if (adjustedHour >= 17 && adjustedHour < 21) return 'evening';
    return 'night';
  };

  const getDayFromDate = (dateStr?: string): number => {
    if (!dateStr) return 1;
    const parts = dateStr.split('/');
    if (parts.length !== 3) return 1;
    return parseInt(parts[1], 10) || 1;
  };

  const timeOfDayLabels = {
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Evening',
    night: 'Night',
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!plan) return <div className="p-8">Travel plan not found</div>;

  const planObj = plan as Record<string, unknown>;
  const isArray = Array.isArray(plan);
  
  let travelItems: TravelItem[] = [];
  if (isArray) {
    travelItems = plan;
  } else {
    const itemListRaw = planObj.travelItemList;
    if (typeof itemListRaw === 'string') {
      try {
        travelItems = JSON.parse(itemListRaw);
      } catch {
        travelItems = [];
      }
    } else if (Array.isArray(itemListRaw)) {
      travelItems = itemListRaw;
    }
  }
  
  const title = isArray ? ((plan[0] as TravelItem)?.title || 'Travel Plan') : (planObj.title as string || 'Travel Plan');
  const description = planObj.description as string | undefined;

  const groupedByDay: Record<number, Record<string, TravelItem[]>> = {};
  travelItems.forEach((item) => {
    const day = getDayFromDate(item.date);
    if (!groupedByDay[day]) groupedByDay[day] = { morning: [], afternoon: [], evening: [], night: [] };
    const timeOfDay = getTimeOfDay(item.arrivalTime);
    groupedByDay[day][timeOfDay].push(item);
  });

  const sortedDays = Object.keys(groupedByDay).map(Number).sort((a, b) => a - b);
  const currentDay = selectedDay ?? sortedDays[0] ?? 1;
  const currentDayItems = groupedByDay[currentDay] || {};
  const currentDayIndex = sortedDays.indexOf(currentDay) + 1;

  return (
    <div className="max-w-4xl mx-auto px-8 pt-4 pb-16">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}

      {travelItems.length > 0 && (
        <div className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
            {sortedDays.map((day, index) => {
              const dayNumber = index + 1;
              const firstItem = groupedByDay[day]?.morning?.[0] || groupedByDay[day]?.afternoon?.[0] || groupedByDay[day]?.evening?.[0] || groupedByDay[day]?.night?.[0];
              const dateStr = firstItem?.date || '';
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg border ${
                    currentDay === day 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-sm font-medium">Day {dayNumber}</div>
                  <div className="text-xs opacity-80">{dateStr}</div>
                </button>
              );
            })}
          </div>

          <h2 className="text-xl font-semibold mb-4">Day {currentDayIndex}</h2>
          {(['morning', 'afternoon', 'evening', 'night'] as const).map((timeOfDay) => {
            const items = currentDayItems[timeOfDay];
            if (!items || items.length === 0) return null;
            return (
              <div key={timeOfDay} className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-medium">{timeOfDayLabels[timeOfDay]}</span>
                  <div className="h-px flex-1 bg-gray-200"></div>
                </div>
                <div className="space-y-3">
                  {items.map((item, idx) => (
                    <div key={item.id || idx} className="border p-4 rounded-lg">
                      <div className="flex items-start gap-4">
                        {item.imageUrl && (
                          <img 
                            src={item.imageUrl} 
                            alt={item.title || ''} 
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {item.arrivalTime && (
                              <span className="text-sm font-medium text-blue-600">
                                {item.arrivalTime}
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-lg">{item.title || 'Untitled Item'}</h3>
                          {item.address && <p className="text-gray-600 text-sm">{item.address}</p>}
                          {item.note && <p className="text-gray-500 text-sm mt-1">{item.note}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}