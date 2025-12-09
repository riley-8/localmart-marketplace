import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShoppingBag, Eye, EyeOff, Mail, Lock, User, Building2, FileText } from "lucide-react";
import { toast } from "sonner";

type AuthMode = "login" | "signup";
type UserRole = "customer" | "brand_owner";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get("role") as UserRole | null;

  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserRole>(initialRole || "customer");
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    tin: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (mode === "signup") {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        setIsLoading(false);
        return;
      }
      if (formData.password.length < 8) {
        toast.error("Password must be at least 8 characters");
        setIsLoading(false);
        return;
      }
      toast.success("Account created successfully! Please check your email to verify your account.");
    } else {
      toast.success("Login successful!");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <ShoppingBag className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">LocalBrandStore</span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {mode === "login" ? "Welcome Back" : "Create Your Account"}
            </h1>
            <p className="text-muted-foreground">
              {mode === "login"
                ? "Sign in to continue to LocalBrandStore"
                : "Join South Africa's premier fashion marketplace"}
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "signup" && (
              <>
                {/* Role Selector */}
                <div className="space-y-2">
                  <Label htmlFor="role">I want to</Label>
                  <Select value={role} onValueChange={(v) => setRole(v as UserRole)}>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer">Shop as a Customer</SelectItem>
                      <SelectItem value="brand_owner">Sell as a Brand Owner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="pl-10 bg-card border-border"
                      required
                    />
                  </div>
                </div>

                {/* TIN for Brand Owners */}
                {role === "brand_owner" && (
                  <div className="space-y-2">
                    <Label htmlFor="tin">Tax Identification Number (TIN)</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="tin"
                        name="tin"
                        type="text"
                        placeholder="Enter your TIN for verification"
                        value={formData.tin}
                        onChange={handleInputChange}
                        className="pl-10 bg-card border-border"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Required for brand verification. You can start selling after verification.
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 bg-card border-border"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 bg-card border-border"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 bg-card border-border"
                    required
                  />
                </div>
              </div>
            )}

            {/* Forgot Password */}
            {mode === "login" && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : mode === "login" ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          {/* Toggle Mode */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </motion.div>
      </div>

      {/* Right Panel - Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920')",
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Authentic South African Fashion
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-md">
            Join thousands of customers and brand owners on South Africa's fastest-growing local fashion marketplace.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-3xl font-bold text-primary-foreground">500+</p>
              <p className="text-sm text-primary-foreground/70">Local Brands</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">50K+</p>
              <p className="text-sm text-primary-foreground/70">Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">100K+</p>
              <p className="text-sm text-primary-foreground/70">Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
