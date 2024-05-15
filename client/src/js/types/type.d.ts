// Define the establishment object type
interface Special {
  specialName: string;
  specialDescription: string;
  specialHours: { startTime: string; endTime: string };
  specialCategories: string[];
}

interface Specials {
  [day: string]: Special[];
}

interface Establishment {
  _id:ObjectId;
  establishmentName: string;
  establishmentType: string;
  establishmentCity: string;
  establishmentZipcode: string;
  establishmentAddress: string;
  establishmentSpecials: Specials;
}

// type EstablishmentsAction = {
//   type: string;
//   establishments: Establishment[];
// };

// type EstablishmentsState = {
//   establishments: Establishment[];
//   establishmentsLoadingStatus: boolean;
//   establishmentsErrorStatus: boolean;
//   error: string;
// };

// type DispatchType = (args: EstablishmentsAction) => EstablishmentsAction;
