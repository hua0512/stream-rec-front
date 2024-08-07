'use server'

import {fetchApi} from "@/lib/data/api";
import {createHash} from 'crypto';

const hashMd5 = (input: string): string => {
  return createHash('md5').update(input).digest('hex');
};

export const login = async (username: string, password: string) => {
  const hashedPassword = hashMd5(password)
  const response = await fetchApi('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password: hashedPassword})
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error("Error logging in, status: " + response.status + " " + errorText)
  }
  return await response.json() as { token: string, validTo: number }
}

export const recoverPassword = async (username: string) => {
  const response = await fetchApi('/auth/recover', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username})
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error("Error recovering password, status: " + response.status + " " + errorText)
  }
}
