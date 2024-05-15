import { Router, Request, Response } from "express";
import { Schema, model } from "mongoose";

const router = Router();


// Interfaces for models
interface ISpecial {
  specialName: string;
  specialDescription: string;
  specialHours: { startTime: string; endTime: string };
  specialCategories: string[];
}

interface ISpecials {
  [day: string]: ISpecial[];
}

interface IEstablishment {
  establishmentName: string;
  establishmentType: string;
  establishmentCity: string;
  establishmentZipcode: string;
  establishmentAddress: string;
  establishmentSpecials: ISpecials;
}

// Schema for Establishment.
const establishmentSchema = new Schema<IEstablishment>({
  establishmentName: { type: String, required: true },
  establishmentType: { type: String, required: true },
  establishmentCity: { type: String, required: true },
  establishmentZipcode: { type: String, required: true },
  establishmentAddress: { type: String, required: true },
  establishmentSpecials: { type: Schema.Types.Mixed, required: true },
});

// Model for Establishment.
const Establishment = model<IEstablishment>(
  "Establishment",
  establishmentSchema
);


// Function to retrieve all establishments
const getAllEstablishments = async (_req: Request, res: Response) => {
  try {
    console.log(_req.params);
    const establishments = await Establishment.find();
    if (!establishments || establishments.length === 0) {
      return res.status(404).json({ message: "No establishments found" });
    }
    console.log("Here's the establishments", establishments);
    res.json(establishments);
  } catch (error: any) {
    console.error("Error retrieving establishments:", error);
    if (error.name === "ValidationError") {
      // Handle validation error
      res.status(400).json({ error: error.message });
    }
    // Handle other errors
    else res.status(500).json({ error: "Internal Server Error" });
  }
};


// Function to get establishments in a given city
const getEstablishmentsByCity = async (_req: Request, res: Response) => {
  try {
    console.log(_req.params);
    const city = _req.params.city;
    const establishments = await Establishment.find({
      establishmentCity: city,
    });
    if (!establishments || establishments.length === 0) {
      return res.status(404).json({ message: "No establishments found" });
    }
    console.log("Here's the establishments", establishments);
    res.json(establishments);
  } catch (error: any) {
    console.error("Error retrieving establishments:", error);
    if (error.name === "ValidationError") {
      // Handle validation error
      res.status(400).json({ error: error.message });
    }
    // Handle other errors
    else res.status(500).json({ error: "Internal Server Error" });
  }
};

router.get("/establishments-by-city/:city", getEstablishmentsByCity);
router.get("/establishments", getAllEstablishments);

export default router;
