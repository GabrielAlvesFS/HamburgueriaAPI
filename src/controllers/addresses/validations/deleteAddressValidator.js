import deleteAddressValidatorSchema from "./schemas/deleteAddressValidatorSchema.js";
import { getAddress } from "../../../services/address.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (params) => {
  try {
    deleteAddressValidatorSchema.parse(params.id)

    const address = await getAddress(params.id)
    if (!address) throw new NotFoundError("The ID of this address doesn't exist!", "id")
    
  } catch (error) {
    throw error

  }
}