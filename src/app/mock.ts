import { Crew } from "./models/crew";

export const mockCertificates: string[] = ["Chief Engineer Certificate","Cook Certificate","Chief Mate Certificate","Second Engineer Certificate","ETO Certificate","Ship Machinery Certificate"];

export const Crews: Crew[] = [
  { firstName: "Atılay" , lastName : "Esen" , nationality : "TR" , title : "Engineer" , certificates : [mockCertificates[0]] , daysOnBoard:30 , dailyRate: 100, currency : "€" },
  { firstName: "Mertcan" , lastName : "Benli" , nationality : "TR" , title : "Engineer" , certificates : [mockCertificates[3]] , daysOnBoard:30 , dailyRate: 100, currency : "€" },
  { firstName: "Deniz Alp" , lastName : "Dolu" , nationality : "TR" , title : "Captain" , certificates : [mockCertificates[2]] , daysOnBoard:30 , dailyRate: 120, currency : "$" },
  { firstName: "Kadir" , lastName : "Doğan" , nationality : "TR" , title : "Machine Technician" , certificates : [mockCertificates[5]] , daysOnBoard:30 , dailyRate: 80, currency : "€" },
  { firstName: "Furkan" , lastName : "Doğan" , nationality : "TR" , title : "Cooker" , certificates : [mockCertificates[1]] , daysOnBoard:30 , dailyRate: 80, currency : "€" }
]


