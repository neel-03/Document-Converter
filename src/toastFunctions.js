import { toast } from "react-hot-toast";

export function displayError(msg) {
  toast.error(msg, {
    style: {
      backgroundColor: "#c3c3c3",
      padding: "16px",
      color: "black",
      boxShadow: "5px 5px red",
    },
    iconTheme: {
      primary: "red",
      secondary: "white",
    },
  });
}

export function displaySuccess(msg) {
  toast.success(msg, {
    style: {
      backgroundColor: "#c3c3c3",
      padding: "16px",
      color: "black",
      boxShadow: "5px 5px green",
    },
    iconTheme: {
      primary: "green",
      secondary: "white",
    },
  });
}
