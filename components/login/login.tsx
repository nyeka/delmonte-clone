import React from "react";
import Welcome from "./Welcome";
import {
  Divider,
  Text,
  TextInput,
  Button,
  Modal,
  Stack,
  Loader,
} from "@mantine/core";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import BgWrapper from "./BgWrapper";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const DashboardLogin = () => {
  const router = useRouter();
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState({
    email: "",
    password: "",
  });
  const [modalError, setModalError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [ModalAuthSalah, setModalAuthSalah] = React.useState(false);

  const HandlerLogin = async () => {
    if (!userData.email) {
      setError({ ...error, email: "Email is required" });
      return;
    }
    if (!userData.password) {
      setError({ ...error, password: "Password is required" });
      return;
    }
    setLoading(true);
    const res = await signIn("credentials", {
      email: userData.email,
      password: userData.password,
      redirect: false,
    });
    if (res?.ok) {
      console.log("tampan");
      router.push("/admin/dashboard");
    }
    if (res?.error) {
      setModalError(res?.error);
      setModalAuthSalah(true);
    }

    setLoading(false);
  };

  return (
    <BgWrapper>
      <div className="w-fit h-fit">
        <div className="flex justify-between mb-[12px]">
          <Text fw={700} fz="26" color="#1C2434">
            Sign In
          </Text>
          <Text>/ Sign In</Text>
        </div>
        <div
          className="flex w-full h-fit  md:w-[1125px] md:h-[660px] p-[24px] justify-evenly items-center flex-col sm:flex-row bg-[#fff]"
          style={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Welcome />
          <Divider orientation="vertical" />
          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-[6px]">
              <Text className="text-[#64748B]">Start Customize</Text>
              <Text className="text-[33px]">Sign In to Dashboard</Text>
            </div>

            <div className="flex flex-col gap-[12px] w-full">
              <TextInput
                type="email"
                placeholder="Enter Your Email"
                label="Email"
                className="gap-[12px] md:w-[428px]"
                rightSection={<AiOutlineMail size={21} />}
                height={56}
                radius={8}
                value={userData.email}
                error={userData.email ? false : error.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                styles={{
                  label: {
                    marginBottom: 10,
                  },
                  input: {
                    height: "56px",
                  },
                }}
              />
              <TextInput
                type="password"
                placeholder="6+ Characters, 1 Capital letter"
                label="Password"
                height={56}
                radius={8}
                value={userData.password}
                error={userData.password ? false : error.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                styles={{
                  label: {
                    marginBottom: 10,
                  },
                  input: {
                    height: "56px",
                  },
                }}
                rightSection={<CiLock size={21} />}
              />
              <button
                className="bg-[#212B36] flex items-center justify-center text-white h-[46px] rounded-[8px] mt-[24px]"
                onClick={HandlerLogin}
              >
                {loading ? <Loader size={30} color="white" /> : "Sign In"}
              </button>
            </div>
          </div>
          <Modal
            title="Alert"
            opened={ModalAuthSalah}
            onClose={() => setModalAuthSalah(false)}
          >
            <Stack>
              <Text fw={700}>{modalError}</Text>
              <Button
                onClick={() => setModalAuthSalah(false)}
                color="pink"
                variant="light"
              >
                Kembali
              </Button>
            </Stack>
          </Modal>
        </div>
      </div>
    </BgWrapper>
  );
};

export default DashboardLogin;
