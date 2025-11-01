"use client";

import type React from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  Alert,
  AlertIcon,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
  Divider,
  HStack,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "demo@example.com" && password === "password") {
        toast({
          title: "Login berhasil!",
          description: "Selamat datang kembali.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setError("Email atau password tidak valid");
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center h={"100vh"}>
      <Box
        maxW="md"
        w="full"
        boxShadow="lg"
        rounded="lg"
        p={8}
        border="1px"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
      >
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading size="lg" color="white" mb={2}>
              Login
            </Heading>
            <Text color="gray.300" fontSize="sm">
              Silakan masukkan detail akun Anda
            </Text>
          </Box>

          {error && (
            <Alert status="error" rounded="md">
              <AlertIcon />
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel color="gray.400">Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="masukkan@email.com"
                  focusBorderColor="blue.500"
                  bg="gray.50"
                  _hover={{ bg: "white" }}
                  _focus={{ bg: "white" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.400">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    focusBorderColor="blue.500"
                    bg="gray.50"
                    _hover={{ bg: "white" }}
                    _focus={{ bg: "white" }}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        showPassword
                          ? "Sembunyikan password"
                          : "Tampilkan password"
                      }
                      icon={showPassword ? <EyeOff /> : <Eye />}
                      onClick={() => setShowPassword(!showPassword)}
                      variant="ghost"
                      size="sm"
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Box w="full" textAlign="right">
                <Link
                  color="blue.500"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Lupa password?
                </Link>
              </Box>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                w="full"
                isLoading={isLoading}
                loadingText="Masuk..."
              >
                Masuk
              </Button>
            </VStack>
          </form>

          <HStack>
            <Divider />
            <Text fontSize="sm" color="gray.500" whiteSpace="nowrap">
              atau
            </Text>
            <Divider />
          </HStack>

          <Button
            variant="outline"
            onClick={() => {
              signIn("google");
            }}
            size="lg"
            w="full"
            leftIcon={
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
            color={"white"}
          >
            Masuk dengan Google
          </Button>

          <Box textAlign="center">
            <Text color="gray.400" fontSize="sm">
              Belum punya akun?{" "}
              <Link
                color="white"
                fontWeight="medium"
                _hover={{ textDecoration: "underline" }}
              >
                Daftar sekarang
              </Link>
            </Text>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
