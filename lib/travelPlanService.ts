import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export interface TravelItemModel {
  id?: string;
  uid?: string;
  creatorUserId?: string;
  creatorName?: string;
  creatorProfileUrl?: string;
  dayInt?: number;
  date?: string;
  arrivalTime?: string;
  estimateTime?: string;
  title?: string;
  note?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  imageUrl?: string;
  itemType?: string;
  createdAt?: string;
  isCompleted?: boolean;
}

export interface UserProfileModel {
  uid?: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
}

export interface TravelPlan {
  id?: string;
  uid?: string;
  shortcode?: string;
  dependShortcode?: string;
  title?: string;
  description?: string;
  isPrivate?: boolean;
  creatorUserId?: string;
  shareUserList?: UserProfileModel[];
  sharedEmailList?: string[];
  travelItemList?: TravelItemModel[];
  latitude?: number;
  longitude?: number;
  likeCount?: number;
  invalidCount?: number;
  viewCount?: number;
  navigateCount?: number;
  likeCountString?: string;
  invalidCountString?: string;
  viewCountString?: string;
  navigateCountString?: string;
  createdAt?: string;
  updatedAt?: string;
  pushDateTime?: string;
  reminderType?: string;
  reminderDay?: number;
  reminderTime?: string;
  travelStartDate?: string;
}

export async function getTravelPlanById(id: string): Promise<TravelPlan | null> {
  const docRef = doc(db, 'travelplan', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as TravelPlan;
  }
  return null;
}