import { useEffect, useState } from "react";
export function useGetScroll(
  isRef: any,
  currentClass: { styles: { active: string; class: string } },
  styles: any
): any {
  useEffect(() => {
    function getScroll() {
      if (window.scrollY >= 740) {
        isRef.current.classList.add(currentClass.styles.active);
      } else {
        isRef.current.classList.remove(currentClass.styles.active);
      }
    }
    document.addEventListener("scroll", getScroll);
    return () => {
      document.removeEventListener("scroll", getScroll);
    };
  });
  return isRef;
}
export function useResize() {
  const [device, setDevice] = useState("");
  useEffect(() => {
    function getWidth() {
      if (document.body.clientWidth >= 1140) {
        setDevice("desktop");
      } else {
        setDevice("mobile");
      }
    }
    getWidth();
    document.addEventListener("resize", getWidth);
    return () => {
      document.removeEventListener("resize", getWidth);
    };
  }, []);
  return device;
}
