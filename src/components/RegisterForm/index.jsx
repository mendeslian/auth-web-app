import Input from "../Input";
import Button from "../Button";

export default function RegisterForm({ onSubmit, isLoading }) {
  return (
    <form
      className="w-full flex flex-col gap-[16px] justify-center items-center"
      onSubmit={onSubmit}
    >
      <Input name="name" label="name" required placeholder="Full name" />
      <Input
        name="email"
        label="email"
        required
        placeholder="example@gmail.com"
        pattern={{
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Enter a valid email address",
        }}
      />

      <Input
        name="password"
        label="password"
        required
        placeholder="0123456789"
        type="password"
      />
      <Input
        name="confirmPassword"
        label="confirm password"
        required
        placeholder="0123456789"
        type="password"
      />
      <div className="w-full flex gap-[16px] items-end">
        <Input
          name="username"
          label="username"
          required
          placeholder="user.name"
        />
      </div>
      <Button fullWidth type="submit" loading={isLoading}>
        Register
      </Button>
    </form>
  );
}
