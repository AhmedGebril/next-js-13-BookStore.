import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const id = params.id;
    console.log(id)
    const {searchParams}=request.nextUrl
    const sort = searchParams.get('sort')
    console.log(sort)
    return new NextResponse({id: id});
}