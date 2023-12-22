
// import { raw } from "body-parser";
// import cors from "cors";
// import { urlencoded } from "body-parser";
// import { 
//   authenticate, 
//   requireCustomerAuthentication, 
//   type MiddlewaresConfig,
// } from "@medusajs/medusa"


// export const config: MiddlewaresConfig = {
//   routes: [
//     {
//       matcher: "/custom/*",
//       middlewares: [
//         cors({
//           origin: "*",
//           credentials: true,
//         }),
//       ],
//     },
//     {
//       matcher: "/store/*",
//       middlewares: [urlencoded({ extended: true })],
//     },
//     {
//       method: ["POST", "PUT"],
//       matcher: "/payment/*",
//       bodyParser: false,
//       middlewares: [requireCustomerAuthentication()],
//     },
//   ],
// };
