import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = process.env.TIMBU_BASE_URL;
const ORGANIZATION_ID = process.env.TIMBU_ORGANIZATION_ID;
const APPID = process.env.TIMBU_APPID;
const APIKEY = process.env.TIMBU_APIKEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const size = searchParams.get("size") || 10;

  try {
    const { data } = await axios.get(BASE_URL as string, {
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort: "false",
        page,
        size,
        Appid: APPID,
        Apikey: APIKEY
      }
    });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
