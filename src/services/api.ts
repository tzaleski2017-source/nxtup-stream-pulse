// API service layer for backend integration
// Replace these mock functions with actual API calls

import { Streamer, SubscriptionData, ApiResponse, FeaturedStreamersResponse, SubscriptionResponse } from '@/types';

// Base API configuration
const API_BASE_URL = process.env.VITE_API_URL || '/api';

// Generic API call function
async function apiCall<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
}

// API functions for backend integration

export const streamersApi = {
  // Get featured streamers
  getFeatured: async (): Promise<Streamer[]> => {
    // Mock data - replace with actual API call
    return [
      {
        id: 1,
        name: "PixelNinja",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face",
        bio: "Master of indie games and speedruns",
        bioSecond: "Known for incredible reaction times",
        rating: 87,
        followers: "45.2K",
        avgViewers: "2.1K",
        growth: "+340%"
      },
      {
        id: 2,
        name: "CosmicGamer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        bio: "Space games and simulation expert",
        bioSecond: "Building the ultimate gaming setup",
        rating: 92,
        followers: "67.8K",
        avgViewers: "3.4K",
        growth: "+280%"
      },
      {
        id: 3,
        name: "NeonQueen",
        image: "https://images.unsplash.com/photo-1494790108755-2616c6d12e04?w=400&h=400&fit=crop&crop=face",
        bio: "Competitive FPS with killer style",
        bioSecond: "Rising esports phenomenon",
        rating: 95,
        followers: "89.1K",
        avgViewers: "4.7K",
        growth: "+425%"
      }
    ];

    // Uncomment below for actual API integration:
    // const response = await apiCall<FeaturedStreamersResponse>('/streamers/featured');
    // return response.data.streamers;
  },

  // Get individual streamer (for future use)
  getById: async (id: number): Promise<Streamer> => {
    const response = await apiCall<Streamer>(`/streamers/${id}`);
    return response.data;
  }
};

export const subscriptionApi = {
  // Subscribe to newsletter
  subscribe: async (data: SubscriptionData): Promise<boolean> => {
    // Mock success - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });

    // Uncomment below for actual API integration:
    // const response = await apiCall<SubscriptionResponse>('/subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // });
    // return response.data.subscribed;
  }
};

// Analytics tracking (optional)
export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    // Integrate with your analytics service
    console.log('Analytics event:', event, properties);
    
    // Example integrations:
    // Google Analytics: gtag('event', event, properties);
    // Mixpanel: mixpanel.track(event, properties);
    // Custom: fetch('/api/analytics', { method: 'POST', body: JSON.stringify({ event, properties }) });
  }
};