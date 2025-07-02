import { NextResponse } from "next/server";

export interface IApiResponse<T> {
  status: number;
  message: string;
  data?: T;
  success: boolean;
  token?: string;
}

export const ApiResponse = <T>(data: IApiResponse<T>) => {
  return NextResponse.json(
    {
      success: data.success,
      message: data.message,
      data: data.data ?? null,
      status: data.status,
      token: data?.token,
    },
    { status: data.status }
  );
};
