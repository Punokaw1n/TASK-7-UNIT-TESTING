// src/test/jest.d.ts
declare module "sweetalert2" {
  const Swal: {
    fire: jest.Mock;
  };
  export default Swal;
}
