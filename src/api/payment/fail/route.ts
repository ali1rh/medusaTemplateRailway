import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export const GET = (req: MedusaRequest, res: MedusaResponse) => {

  res.json({
    page: "[GET] fail page",
  });
};
