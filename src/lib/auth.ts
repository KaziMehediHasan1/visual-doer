import jwt from "jsonwebtoken";

interface ITokenPayload {
  email: string;
  id: string;
}

const secret = process.env.NEXT_JWT_TOKEN_SECRET;

export const SignToken = (payload: ITokenPayload) => {
  return jwt.sign(payload, secret as string, { expiresIn: "2h" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret as string);
};
