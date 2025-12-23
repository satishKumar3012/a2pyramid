import { API_ENDPOINTS } from '../constants';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_ENDPOINTS.base;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const config: RequestInit = {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      };

      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || 'An error occurred',
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // GET request
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // Contact form submission
  async submitContactForm(formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    subject?: string;
  }): Promise<ApiResponse<{ id: string }>> {
    return this.post('/contact', formData);
  }

  // Newsletter subscription
  async subscribeNewsletter(email: string): Promise<ApiResponse<{ id: string }>> {
    return this.post('/newsletter/subscribe', { email });
  }

  // Get testimonials
  async getTestimonials(): Promise<ApiResponse<any[]>> {
    return this.get('/testimonials');
  }

  // Get FAQ
  async getFAQ(): Promise<ApiResponse<any[]>> {
    return this.get('/faq');
  }

  // Analytics tracking
  async trackEvent(event: {
    name: string;
    properties?: Record<string, any>;
  }): Promise<ApiResponse<void>> {
    return this.post('/analytics/track', event);
  }
}

export const apiService = new ApiService();

// Error handling utility
export const handleApiError = (error: string): string => {
  const errorMessages: Record<string, string> = {
    'Network error': 'Please check your internet connection and try again.',
    'Validation error': 'Please check your input and try again.',
    'Unauthorized': 'Please log in to continue.',
    'Forbidden': 'You do not have permission to perform this action.',
    'Not found': 'The requested resource was not found.',
    'Server error': 'Something went wrong on our end. Please try again later.',
  };

  return errorMessages[error] || error || 'An unexpected error occurred.';
};