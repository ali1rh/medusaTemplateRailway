import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import { CustomerService } from "@medusajs/medusa";
import { MedusaError } from "@medusajs/utils";

export const GET = (req: MedusaRequest, res: MedusaResponse) => {
  // throw new Error ("Post was not found")

  throw new MedusaError(
    MedusaError.Types.INVALID_ARGUMENT,
    "Post was not found"
  );

  res.json({
    message: "[GET] Hello world!",
  });
};

export const POST = (req: MedusaRequest, res: MedusaResponse) => {
  res.json({
    message: "[POST] Hello world!",
  });
};
export async function PUT(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.sendStatus(200).json({
    message: "Welcome to Your Store!",
  });
}

export const DELETE = (req: MedusaRequest, res: MedusaResponse) => {
  const name = req.body.name;
  const id = req.user?.customer_id;

  if (!id) {
    res.json({
      user: "not logged in",
    });
  }

  res.json(name);

  // do something with the data...
};
