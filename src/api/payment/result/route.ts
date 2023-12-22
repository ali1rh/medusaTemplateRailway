import { MedusaRequest, MedusaResponse } from "@medusajs/medusa"

export const GET = (req: MedusaRequest,res: MedusaResponse, ) => {
  res.send("please send POST request")
}

export const POST = (req: MedusaRequest,res: MedusaResponse, ) => {
  
    console.log("req.body", req.body)
    console.log("req.query", req.query)

    if(req.body.EDP_PRECHECK == "YES") {
      res.send("OK")
    }
    
    // res.json({
    //   page: "[GET] fail page",
    // });
  
    res.send("fail")
  }
