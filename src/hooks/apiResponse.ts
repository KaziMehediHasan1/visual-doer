import { NextResponse } from "next/server";

export interface IApiResponse<T> {
  status: number;
  message: string;
  data?: T;
  success: boolean;
}

export const ApiResponse = <T>(data: IApiResponse<T>) => {
  return NextResponse.json(
    {
      success: data.success,
      message: data.message,
      data: data.data ?? null,
      status: data.status,
    },
    { status: data.status }
  );
};
