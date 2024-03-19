'use server'
import {cookies} from "next/headers";

export interface StoreTokenRequest {
  username: string
  token: string
  validUntil: string
}

export async function storeToken(request: StoreTokenRequest) {
  cookies().set({
    name: "accessToken",
    value: request.token,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 2,
    sameSite: "strict",
    secure: true,
  })
  cookies().set({
    name: "username",
    value: request.username.toString(),
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  })
  cookies().set({
    name: "validUntil",
    value: request.validUntil,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 2,
    sameSite: "strict",
    secure: true,
  })
  console.log("stored token for", request.username)
}


export async function getUserName() {
  return cookies().get("username")?.value ?? ""
}

export async function removeAccessToken() {
  cookies().delete("accessToken")
}

export async function removeValidUntil() {
  cookies().delete("validUntil")
}