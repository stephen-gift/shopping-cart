import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = process.env.TIMBU_BASE_URL;
const ORGANIZATION_ID = process.env.TIMBU_ORGANIZATION_ID;
const APPID = process.env.TIMBU_APPID;
const APIKEY = process.env.TIMBU_APIKEY;

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${params.id}`, {
      params: {
        organization_id: ORGANIZATION_ID,
        Appid: APPID,
        Apikey: APIKEY
      }
    });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
