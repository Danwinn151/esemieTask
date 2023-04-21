export interface UserData {
        id: number;
        name: string;
        email: string & number;
        address: {
          street: string;
          city: string | number;
          zipcode: number | number;
        };
        phone: string | number;
      };