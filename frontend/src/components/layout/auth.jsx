import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { KeyRound } from 'lucide-react';
import { Label } from '../ui/label';

const AuthForm = ({ onSubmit, buttonText, linkText, setSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 place-items-center">
      <div>
        <Label htmlFor="username">Username: </Label>
        <Input
          className={errors.username?.type && 'border-red-600'}
          {...register('username', { required: 'Username required' })}
          type="text"
          placeholder="Enter username"
        />
        {errors.username?.type === 'required' && (
          <p className="text-red-500" role="alert">
            Username is required
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="password">Password: </Label>
        <Input
          className={errors.password?.type && 'border-red-600'}
          type="password"
          {...register('password', { required: 'Password required' })}
          placeholder="Enter password"
        />
        {errors.password?.type === 'required' && (
          <p className="text-red-500" role="alert">
            Password is required
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <Button type="submit">
          <KeyRound className="mr-2" /> {buttonText}
        </Button>
        <Button onClick={() => setSignup(prev => !prev)} type="button">
          <KeyRound className="mr-2" /> {linkText}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;