import { Model, Types } from 'mongoose';


export type TStudent = {
  user: Types.ObjectId;
  name: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress?: string;
  permanentAddress?: string;
  profileImg?: string;
  isDeleted: boolean;
};

//for creating static
export interface StudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TStudent | null>;
}
