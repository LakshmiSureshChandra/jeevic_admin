import { env } from "@/env";
import { IAllStats, EcomAdminStatsResponse } from "./types";
import type {
  IUser,
  IDishCategory,
  IDish,
  IDineInCheckout,
  IDineInOrder,
  IDineInTableBooking,
  IDineInTable,
  IReview,
  IAssistance,
  IBanner,
  ICategory,
  ISubCategory,
  IProduct,
  ICoupon,
  ISale,
  IContactMessage,
} from "./types";
import { TableStatus } from "@/components/real-time/table-grid";

export const LOGIN_URL = `${env.NEXT_PUBLIC_API_URL}/auth/login`;

export class APISDK {
  private static instance: APISDK;
  private static readonly BASE_URL = env.NEXT_PUBLIC_API_URL;
  private accessToken: string | null;

  private constructor(accessToken: string | null) {
    this.accessToken = accessToken;
  }

  public static getInstance(accessToken?: string | null): APISDK {
    // If an instance already exists, update its token if a new one is provided
    if (APISDK.instance) {
      if (accessToken !== undefined) {
        APISDK.instance.setAccessToken(accessToken);
      }
      return APISDK.instance;
    }

    // For first initialization, try to get token from localStorage if not provided
    if (accessToken === undefined && typeof window !== "undefined") {
      try {
        const storedToken = localStorage.getItem("access_token");
        if (storedToken) {
          accessToken = storedToken;
        }
      } catch (error) {
        console.error("APISDK: Error accessing localStorage:", error);
      }
    }

    // Create a new instance with the provided token
    APISDK.instance = new APISDK(accessToken || null);
    return APISDK.instance;
  }

  public setAccessToken(accessToken: string | null): void {
    this.accessToken = accessToken;
  }

  public async getUser(): Promise<IUser> {
    if (!this.accessToken) {
      console.error("APISDK: No access token available for getUser request");
      throw new Error("Authentication required");
    }

    const response = await fetch(`${APISDK.BASE_URL}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get user: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async loginRequest(
    countryCode: string,
    phoneNumber: string
  ): Promise<{ message: string }> {
    const response = await fetch(`${APISDK.BASE_URL}/auth/login-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_code: countryCode,
        phone_number: phoneNumber,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to login request: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async verifyAccountAccess(
    countryCode: string,
    phoneNumber: string,
    otp: string
  ): Promise<any> {
    const response = await fetch(
      `${APISDK.BASE_URL}/auth/verify-account-access`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country_code: countryCode,
          phone_number: phoneNumber,
          otp,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to verify account access: ${response.status} ${response.statusText}`
      );
    }

    // Return the full response to ensure we get the access_token
    return await response.json();
  }

  public async getDishCategories(): Promise<IDishCategory[]> {
    const response = await fetch(`${APISDK.BASE_URL}/dish/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get dish categories: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async getDishCategoryById(
    dishCategoryId: string
  ): Promise<IDishCategory> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dish/categories/${dishCategoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get dish category by id: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async getDishById(dishId: string): Promise<IDish> {
    const response = await fetch(`${APISDK.BASE_URL}/dish/i/${dishId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get dish by id: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  async getContactMessages(): Promise<{ rows: IContactMessage[] }> {
    const response = await fetch(`${APISDK.BASE_URL}/message`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get contact messages: ${response.status} ${response.statusText}`
      );
    }
    const result = await response.json();
    return result; // Return the entire result object
  }

  // Get a specific contact message by ID
  async getContactMessageById(messageId: string): Promise<IContactMessage> {
    const response = await fetch(`${APISDK.BASE_URL}/message/${messageId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get contact message: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // Mark a message as read
  async updateContactMessageStatus(
    messageId: string,
    isRead: boolean
  ): Promise<void> {
    const response = await fetch(
      `${APISDK.BASE_URL}/message/${messageId}/read`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify({ is_read: isRead }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update message status: ${response.status} ${response.statusText}`
      );
    }
  }

  // Delete a contact message
  async deleteContactMessage(messageId: string): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/message/${messageId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete message: ${response.status} ${response.statusText}`
      );
    }
  }

  public async getDishes(): Promise<IDish[]> {
    const response = await fetch(`${APISDK.BASE_URL}/dish/dishes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get dishes: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async getDishesByCategoryId(dishCategoryId: string): Promise<IDish[]> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dish/dishes/${dishCategoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get dishes by category id: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async createDishCategory(
    name: string,
    picture: string
  ): Promise<IDishCategory> {
    const response = await fetch(`${APISDK.BASE_URL}/dish/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        name,
        picture,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create dish category: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // updateDishCategory
  public async updateDishCategory(
    dishCategoryId: string,
    name: string,
    picture: string
  ): Promise<void> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dish/categories/${dishCategoryId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify({
          name,
          picture,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update dish category: ${response.status} ${response.statusText}`
      );
    }
  }

  // deleteDishCategory
  public async deleteDishCategory(dishCategoryId: string): Promise<void> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dish/categories/${dishCategoryId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to delete dish category: ${response.status} ${response.statusText}`
      );
    }
  }

  // createDish
  public async createDish({
    name,
    price,
    dish_category_id,
    is_available,
    is_non_veg,
    meta_data,
    picture,
  }: {
    name: string;
    price: number;
    picture: string;
    dish_category_id: string;
    is_available: boolean;
    is_non_veg: boolean;
    meta_data: object;
  }): Promise<IDish> {
    const response = await fetch(`${APISDK.BASE_URL}/dish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        name,
        price,
        picture,
        dish_category_id,
        is_available,
        is_non_veg,
        meta_data,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create dish: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // updateDish
  public async updateDish(
    dishId: string,
    {
      name,
      price,
      picture,
      dish_category_id,
      is_available,
      is_non_veg,
      meta_data,
    }: {
      name: string;
      price: number;
      picture: string;
      dish_category_id: string;
      is_available: boolean;
      is_non_veg: boolean;
      meta_data: object;
    }
  ): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/dish/${dishId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        name,
        price,
        picture,
        dish_category_id,
        is_available,
        is_non_veg,
        meta_data,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update dish: ${response.status} ${response.statusText}`
      );
    }
  }

  // deleteDish
  public async deleteDish(dishId: string): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/dish/${dishId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete dish: ${response.status} ${response.statusText}`
      );
    }
  }

  // getTables
  public async getTables(): Promise<{
    success: boolean;
    data: IDineInTable[];
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get tables: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getTableById
  public async getTableById(tableId: string): Promise<{
    success: boolean;
    data: IDineInTable;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/tables/${tableId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get table: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getTableByTableNumber
  public async getTableByTableNumber(tableNumber: string): Promise<{
    success: boolean;
    data: IDineInTable;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/tables/by-no/${tableNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get table: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getBooking
  public async getBooking(bookingId: string): Promise<{
    success: boolean;
    data: IDineInTableBooking;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/bookings/${bookingId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get booking: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // createBooking
  public async createBooking({
    table_id,
    booking_date,
    booking_time,
    from_time,
    to_time,
    number_of_people,
  }: {
    table_id: string;
    booking_date: string;
    booking_time: string;
    from_time: string;
    to_time: string;
    number_of_people: number;
  }): Promise<{
    success: boolean;
    data: IDineInTableBooking;
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        table_id,
        booking_date,
        booking_time,
        from_time,
        to_time,
        number_of_people,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create booking: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // updateBooking
  public async updateBooking(
    bookingId: string,
    data: Partial<IDineInTableBooking>
  ): Promise<void> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/bookings/${bookingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update booking: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // deleteBooking
  public async deleteBooking(bookingId: string): Promise<void> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/bookings/${bookingId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to delete booking: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // markBookingAsCancelled
  public async markBookingAsCancelled(bookingId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/bookings/cancel/${bookingId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to mark booking as cancelled: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // markBookingAsCompleted
  public async markBookingAsCompleted(bookingId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/bookings/complete/${bookingId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to mark booking as completed: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getOrderById
  public async getOrderById(orderId: string): Promise<{
    success: boolean;
    data: IDineInOrder;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/${orderId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get order: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getOrdersByBookingId
  public async getOrdersByBookingId(bookingId: string): Promise<{
    success: boolean;
    data: IDineInOrder[];
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/booking/${bookingId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get orders: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getOrdersByUserId
  public async getOrdersByUserId(userId: string): Promise<{
    success: boolean;
    data: IDineInOrder[];
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get orders: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getOrdersByTableId
  public async getOrdersByTableId(tableId: string): Promise<{
    success: boolean;
    data: IDineInOrder[];
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/table/${tableId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get orders: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // createOrder
  public async createOrder(orderData: IDineInOrder): Promise<{
    success: boolean;
    data: IDineInOrder;
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create order: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // markOrderAsCancelled
  public async markOrderAsCancelled(orderId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/cancel/${orderId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to mark order as cancelled: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getCheckoutById
  public async getCheckoutById(checkoutId: string): Promise<{
    success: boolean;
    data: IDineInCheckout;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/checkouts/${checkoutId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get checkout: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getCheckoutByBookingId
  public async getCheckoutByBookingId(bookingId: string): Promise<{
    success: boolean;
    data: IDineInCheckout;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/checkouts/booking/${bookingId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get checkout: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getCheckoutByUserId
  public async getCheckoutByUserId(userId: string): Promise<{
    success: boolean;
    data: IDineInCheckout;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/checkouts/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get checkout: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getCheckoutByTableId
  public async getCheckoutByTableId(tableId: string): Promise<{
    success: boolean;
    data: IDineInCheckout;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/checkouts/table/${tableId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get checkout: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // createUserEndCheckout
  public async createUserEndCheckout(booking_id: string): Promise<{
    success: boolean;
    data: IDineInCheckout;
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        booking_id,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create checkout: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getAvailableTables
  public async getAvailableTables(
    fromTime: string,
    toTime: string
  ): Promise<{
    success: boolean;
    data: IDineInTable[];
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/available-tables`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify({
          from_time: fromTime,
          to_time: toTime,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get available tables: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getCheckouts
  public async getCheckouts(): Promise<{
    success: boolean;
    data: IDineInCheckout[];
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get checkouts: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // updateCheckout
  public async updateCheckout(
    checkoutId: string,
    checkoutData: Partial<IDineInCheckout>
  ): Promise<{
    success: boolean;
    data: IDineInCheckout;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/checkouts/${checkoutId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify(checkoutData),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update checkout: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // deleteCheckout
  public async deleteCheckout(checkoutId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/checkouts/${checkoutId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to delete checkout: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getOrders
  public async getOrders(): Promise<{
    success: boolean;
    data: IDineInOrder[];
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get orders: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // markOrderAsReady
  public async markOrderAsReady(orderId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/ready/${orderId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to mark order as ready: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // markOrderAsServed
  public async markOrderAsServed(orderId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/serve/${orderId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to mark order as served: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // markOrderAsPreparing
  public async markOrderAsPreparing(orderId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/prepare/${orderId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to mark order as served: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // updateOrder
  public async updateOrder(
    orderId: string,
    data: Partial<IDineInOrder>
  ): Promise<{
    success: boolean;
    data: IDineInOrder;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/${orderId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update order: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async updateOrDeleteOrder(
    orderId: string,
    data: Partial<IDineInOrder>
  ): Promise<{
    success: boolean;
    data: IDineInOrder;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/update/${orderId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update order: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // deleteOrder
  public async deleteOrder(orderId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/orders/${orderId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to delete order: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getBookings
  public async getBookings(): Promise<{
    success: boolean;
    data: IDineInTableBooking[];
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get bookings: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // createTable
  public async createTable({
    table_number,
    capacity,
    meta_data,
  }: {
    table_number: string;
    capacity: number;
    meta_data: {
      status: TableStatus;
      qr_code: string;
    };
  }): Promise<{
    success: boolean;
    data: IDineInTable;
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        table_number,
        capacity,
        meta_data,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create table: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // updateTable
  public async updateTable(
    tableId: string,
    {
      table_number,
      capacity,
      meta_data,
    }: {
      table_number: string;
      capacity: number;
      meta_data: object;
    }
  ): Promise<{
    success: boolean;
    data: IDineInTable;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/tables/${tableId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify({
          table_number,
          capacity,
          meta_data,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update table: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // deleteTable
  public async deleteTable(tableId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/tables/${tableId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to delete table: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getReviewsByDish
  public async getReviewsByDish(dishId: string): Promise<{
    success: boolean;
    data: IReview[];
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/reviews/d/${dishId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get reviews by dish: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getReviewsByProduct
  public async getReviewsByProduct(productId: string): Promise<{
    success: boolean;
    data: IReview[];
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/reviews/p/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get reviews by dish: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getReview
  public async getReview(reviewId: string): Promise<{
    success: boolean;
    data: IReview;
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/reviews/${reviewId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get review: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // createReview
  public async createReview({
    product_id,
    dish_id,
    rating,
    comment,
    meta_data,
  }: {
    product_id?: string;
    dish_id?: string;
    rating: number;
    comment: string;
    meta_data: object;
  }): Promise<{
    message: string;
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        product_id,
        dish_id,
        rating,
        comment,
        meta_data,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create review: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // deleteReview
  public async deleteReview(reviewId: string): Promise<{
    message: string;
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete review: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // updateReview
  public async updateReview(
    reviewId: string,
    {
      rating,
      comment,
      meta_data,
    }: {
      rating?: number;
      comment?: string;
      meta_data?: object;
    }
  ): Promise<{
    success: boolean;
    data: IReview;
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/reviews/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        rating,
        comment,
        meta_data,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update review: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getAverageRatingForDish
  public async getAverageRatingForDish(dishId: string): Promise<{
    success: boolean;
    data: {
      average_rating: number;
    };
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/reviews/avg/d/${dishId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get average rating for dish: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getAverageRatingForProduct
  public async getAverageRatingForProduct(productId: string): Promise<{
    success: boolean;
    data: {
      average_rating: number;
    };
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/reviews/avg/p/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get average rating for product: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async uploadFile(file: File): Promise<{
    url: string;
  }> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${APISDK.BASE_URL}/upload`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to upload file: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getReservations
  public async getReservations(
    page?: number,
    limit?: number
  ): Promise<{
    success: boolean;
    data: {
      reservations: IReservation[];
      total: number;
    };
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/reservations?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get reservations: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // markTableAsCleaned
  public async markTableAsCleaned(tableId: string): Promise<{
    success: boolean;
    message: string;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/tables/cleaned/${tableId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to mark table as cleaned: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getTableStats
  public async getTableStats(): Promise<{
    success: boolean;
    data: IDineInTableStats[];
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/table-stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get table stats: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getAllAssistance(): Promise<{
    success: boolean;
    data: IAssistance[];
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/dine-in/assistance`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get assistance: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // deleteAssistance
  public async deleteAssistance(assistanceId: string): Promise<{
    success: boolean;
  }> {
    const response = await fetch(
      `${APISDK.BASE_URL}/dine-in/assistance/${assistanceId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to delete assistance: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // Add this near other user-related methods
  public async getAdminUsers(): Promise<{
    success: boolean;
    data: {
      users: {
        rows: any[];
      };
      total: number;
    };
  }> {
    const response = await fetch(`${APISDK.BASE_URL}/admin/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get admin users: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // getAllStats
  public async getAllStats(): Promise<IAllStats> {
    const response = await fetch(`${APISDK.BASE_URL}/admin/allstats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get all stats: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  // Create banner
  public async createBanner(formData: FormData): Promise<IBanner> {
    const response = await fetch(`${APISDK.BASE_URL}/banner/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create banner: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // Get all banners
  public async getBanners(): Promise<IBanner[]> {
    const response = await fetch(`${APISDK.BASE_URL}/banner`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get banners: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  // Delete a banner
  public async deleteBanner(bannerId: string): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/banner/${bannerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete banner: ${response.status} ${response.statusText}`
      );
    }
  }
  public async createEmployee(employeeData: {
    first_name: string;
    last_name: string;
    email: string;
    country_code: string;
    phone_number: string;
    profile_picture: string;
    role: string;
  }): Promise<{ success: boolean; message: string; data?: any }> {
    const response = await fetch(`${APISDK.BASE_URL}/admin/staff`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create employee: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getEmployees(): Promise<{ success: boolean; data: any[] }> {
    const response = await fetch(`${APISDK.BASE_URL}/admin/staff`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get employees: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getEmployeeById(
    staffId: string
  ): Promise<{ success: boolean; data: any }> {
    const response = await fetch(`${APISDK.BASE_URL}/admin/staff/${staffId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get employee: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async updateEmployee(
    staffId: string,
    employeeData: Partial<{
      first_name: string;
      last_name: string;
      profile_picture: string;
      role: string;
      phone_number: string;
      email: string;
    }>
  ): Promise<{ success: boolean; message: string; data?: any }> {
    const response = await fetch(`${APISDK.BASE_URL}/admin/staff/${staffId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update employee: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async deleteEmployee(
    staffId: string
  ): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${APISDK.BASE_URL}/admin/staff/${staffId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete employee: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async createNewCategory(
    name: string,
    imageUrl: string[]
  ): Promise<string> {
    const response = await fetch(`${APISDK.BASE_URL}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({ name, image_url: imageUrl }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create category: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.id;
  }
  public async getAllCategories(): Promise<ICategory[]> {
    const response = await fetch(`${APISDK.BASE_URL}/category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get categories: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async updateCategory(
    categoryId: string,
    name: string,
    imageUrl: string[]
  ): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/category/${categoryId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({ name, image_url: imageUrl }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update category: ${response.status} ${response.statusText}`
      );
    }
  }
  public async deleteCategory(categoryId: string): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/category/${categoryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete category: ${response.status} ${response.statusText}`
      );
    }
  }
  public async getCategoryById(categoryId: string): Promise<ICategory> {
    const response = await fetch(`${APISDK.BASE_URL}/category/${categoryId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get category by id: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  //sub categories
  public async createNewSubCategory(
    name: string,
    categoryId: string,
    image_url: string[]
  ): Promise<string> {
    const response = await fetch(`${APISDK.BASE_URL}/subcategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({ name, category_id: categoryId, image_url }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create subcategory: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.id;
  }
  public async getAllSubCategories(): Promise<ISubCategory[]> {
    const response = await fetch(`${APISDK.BASE_URL}/subcategory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get subcategories: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async updateSubCategory(
    subCategoryId: string,
    name: string,
    categoryId: string,
    image_url: string[]
  ): Promise<void> {
    const response = await fetch(
      `${APISDK.BASE_URL}/subcategory/${subCategoryId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify({ name, category_id: categoryId, image_url }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update subcategory: ${response.status} ${response.statusText}`
      );
    }
  }
  public async deleteSubCategory(subCategoryId: string): Promise<void> {
    const response = await fetch(
      `${APISDK.BASE_URL}/subcategory/${subCategoryId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to delete subcategory: ${response.status} ${response.statusText}`
      );
    }
  }
  public async getSubCategoryById(
    subCategoryId: string
  ): Promise<ISubCategory> {
    const response = await fetch(
      `${APISDK.BASE_URL}/subcategory/${subCategoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get subcategory by id: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getSubCategoriesByCategoryId(
    categoryId: string
  ): Promise<ISubCategory[]> {
    const response = await fetch(
      `${APISDK.BASE_URL}/subcategory/c/${categoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get subcategories by category id: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  // product functions
  public async createProduct({
    name,
    description,
    price,
    image_url,
    category_id,
    subcategory_id,
    meta_data,
    is_active,
    availability_count,
  }: {
    name: string;
    description: string;
    price: number;
    image_url: string[];
    category_id: string;
    subcategory_id: string;
    meta_data: Record<string, string>;
    is_active: boolean;
    availability_count: number;
  }): Promise<string> {
    const response = await fetch(`${APISDK.BASE_URL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        name,
        description,
        price,
        image_url,
        category_id,
        subcategory_id,
        meta_data,
        is_active,
        availability_count,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create product: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.id;
  }
  public async updateProduct(
    product_id: string,
    data: Record<string, any>
  ): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/product/${product_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update product: ${response.status} ${response.statusText}`
      );
    }
  }
  public async deleteProduct(product_id: string): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/product/${product_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete product: ${response.status} ${response.statusText}`
      );
    }
  }
  public async getProductsByCategory(
    {
      category_id,
      subcategory_id,
    }: {
      category_id?: string;
      subcategory_id?: string;
    },
    {
      limit,
      page,
    }: {
      page: number;
      limit: number;
    }
  ): Promise<IProduct[]> {
    const query = new URLSearchParams();
    if (category_id) query.append("category_id", category_id);
    if (subcategory_id) query.append("subcategory_id", subcategory_id);
    query.append("limit", limit.toString());
    query.append("page", page.toString());

    const response = await fetch(
      `${APISDK.BASE_URL}/product?${query.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get products: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async getProductByCategoryId(
    category_id: string
  ): Promise<IProduct | null> {
    const response = await fetch(
      `${APISDK.BASE_URL}/product/c/${category_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get product: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async getProductBySubCategoryId(
    subcategory_id: string
  ): Promise<IProduct | null> {
    const response = await fetch(
      `${APISDK.BASE_URL}/product/s/${subcategory_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get product: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async getProductById(product_id: string): Promise<IProduct | null> {
    const response = await fetch(`${APISDK.BASE_URL}/product/i/${product_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get product: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  public async getProductCount({
    category_id,
    subcategory_id,
  }: {
    category_id?: string;
    subcategory_id?: string;
  }): Promise<number> {
    const query = new URLSearchParams();
    if (category_id) query.append("category_id", category_id);
    if (subcategory_id) query.append("subcategory_id", subcategory_id);

    const response = await fetch(
      `${APISDK.BASE_URL}/product/count?${query.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get product count: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.count;
  }

  public async getProductsByIds(product_ids: string[]): Promise<IProduct[]> {
    const response = await fetch(`${APISDK.BASE_URL}/product/ids`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({ ids: product_ids }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get products by ids: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getReviewsByProductId(product_id: string): Promise<IReview[]> {
    const response = await fetch(`${APISDK.BASE_URL}/review/p/${product_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get products by ids: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async deleteReviewById(review_id: string): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/review/${review_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get products by ids: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async averageRatingsByProductId(product_id: string): Promise<void> {
    const response = await fetch(
      `${APISDK.BASE_URL}/review/avg/p/${product_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get products by ids: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getCoupons(): Promise<ICoupon[]> {
    const response = await fetch(`${APISDK.BASE_URL}/coupon`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get coupons: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getCoupon(coupon_id: string): Promise<ICoupon> {
    const response = await fetch(`${APISDK.BASE_URL}/coupon/${coupon_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get coupon: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async createCoupon(data: {
    code: string;
    is_one_time: boolean;
    expires_on: Date;
    no_of_uses: number;
    meta_data: Record<string, string>;
  }): Promise<string> {
    const response = await fetch(`${APISDK.BASE_URL}/coupon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create coupon: ${response.status} ${response.statusText}`
      );
    }

    const res = await response.json();
    return res.id;
  }
  public async updateCoupon(
    coupon_id: string,
    data: {
      code: string;
      is_one_time: boolean;
      expires_on: Date;
      no_of_uses: number;
      meta_data: Record<string, string>;
    }
  ): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/coupon/${coupon_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update coupon: ${response.status} ${response.statusText}`
      );
    }
  }
  public async deleteCoupon(coupon_id: string): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/coupon/${coupon_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete coupon: ${response.status} ${response.statusText}`
      );
    }
  }
  // sales
  public async getSales(): Promise<ISale[]> {
    const response = await fetch(`${APISDK.BASE_URL}/sales`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get sales: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getSale(saleId: string): Promise<ISale> {
    const response = await fetch(`${APISDK.BASE_URL}/sales/${saleId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get sale: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getSaleProducts(saleType: string, saleId: string): Promise<any> {
    const response = await fetch(
      `${APISDK.BASE_URL}/sales/${saleType}/${saleId}/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get sale products: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async getCurrentSalesOverProduct(productId: string): Promise<any> {
    const response = await fetch(`${APISDK.BASE_URL}/sales/over/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get current sales over product: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async createSale(saleData: ISale): Promise<ISale> {
    const response = await fetch(`${APISDK.BASE_URL}/sales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(saleData),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create sale: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
  public async updateSale(
    saleId: string,
    saleData: Partial<ISale>
  ): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/sales/${saleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(saleData),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update sale: ${response.status} ${response.statusText}`
      );
    }
  }
  public async deleteSale(saleId: string): Promise<void> {
    const response = await fetch(`${APISDK.BASE_URL}/sales/${saleId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete sale: ${response.status} ${response.statusText}`
      );
    }
  }
  public async getEcomStats(): Promise<EcomAdminStatsResponse> {
    const response = await fetch(`${APISDK.BASE_URL}/admin/allecomstats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get all stats: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }
}

export * from "./types";
