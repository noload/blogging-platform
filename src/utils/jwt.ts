import { JwtPayload } from "jsonwebtoken";

export interface JwtPayloadWithUserId extends JwtPayload {
    userId: string;
  }
  