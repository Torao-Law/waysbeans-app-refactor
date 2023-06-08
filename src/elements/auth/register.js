import { Dialog, Card, CardBody, CardFooter, Input, Typography, Button } from "@material-tailwind/react";
 
export default function Register({showModal, closeModal, loginModal}) {
  return (
    <Dialog size="xs" open={showModal} handler={closeModal} className="bg-transparent shadow-none">
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h3" color="green" className="text-center py-3">
            REGISTER
          </Typography>
          <Input label="Name" size="lg" color="green" />
          <Input label="Email" size="lg" color="green" />
          <Input label="Password" size="lg" color="green" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={closeModal} fullWidth color="green">
            REGISTER
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="green"
              className="ml-1 font-bold"
              onClick={loginModal}
            >
              Log in
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </Dialog>
  );
}