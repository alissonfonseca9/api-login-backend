import { Injectable } from "@nestjs/common";
import { admin } from "./firebase-admin";

@Injectable()
export class UsersService {
  async getMe(uid: string) {
    const userDoc = await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .get();

    if (!userDoc.exists) {
      return null;
    }

    return userDoc.data();
  }
}