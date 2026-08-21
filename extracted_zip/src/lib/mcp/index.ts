import { defineMcp } from "@lovable.dev/mcp-js";
import getClinicInfo from "./tools/get-clinic-info";
import listLocations from "./tools/list-locations";
import listTreatments from "./tools/list-treatments";
import getTreatment from "./tools/get-treatment";
import listDoctors from "./tools/list-doctors";

export default defineMcp({
  name: "dent-arena-premier-site",
  title: "Dent Arena Premier Site",
  version: "0.1.0",
  instructions:
    "Read-only tools for Dent Arena, a dental clinic with two branches in Surat, Gujarat (Bhatar and Vesu). Use get_clinic_info for contact details, list_locations for branch information, list_treatments/get_treatment for the published treatment library, and list_doctors for dentist profiles. Fields the clinic has not confirmed are returned as { pending: reason } and must never be presented as fact. Nothing here is medical advice, and no prices or appointment bookings are available.",
  tools: [
    getClinicInfo,
    listLocations,
    listTreatments,
    getTreatment,
    listDoctors,
  ] as unknown as Parameters<typeof defineMcp>[0]["tools"],
});
