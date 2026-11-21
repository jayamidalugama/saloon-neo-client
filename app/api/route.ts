export function GET(){
    console.log("Get request received.");
}

export async function POST(req){
    const body = await req.json()
    console.log(body)
    console.log("Post request received.");
}