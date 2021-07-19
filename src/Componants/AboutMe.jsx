import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <div>AboutMe</div>;
}
