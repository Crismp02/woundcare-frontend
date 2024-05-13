import routes from "@/utils/routes";

export const notificationRoutes = new Map();
notificationRoutes.set("POST_BANDAGE_CHANGE", routes.postBandageChangeForm);
notificationRoutes.set(
  "MONITORING_SIGNS_AND_SYMPTOMS",
  routes.monitoringSignsAndSymptomsForm
);
notificationRoutes.set("DISCHARGE", routes.dischargeForm);

export const notificationImages = new Map();
notificationImages.set(
  "POST_BANDAGE_CHANGE",
  "/notifications/first-aid-kit.svg"
);
notificationImages.set(
  "MONITORING_SIGNS_AND_SYMPTOMS",
  "/notifications/symptoms-man.svg"
);
notificationImages.set("DISCHARGE", "/notifications/discharge.svg");
notificationImages.set("MEDICATION_TIME", "/notifications/medication.svg");
notificationImages.set("BANDAGE_CHANGE", "/notifications/first-aid-kit.svg");
