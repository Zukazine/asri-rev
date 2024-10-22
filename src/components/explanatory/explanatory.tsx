import { Descriptive } from "./descriptive";
import { Layers } from "./layers";

export const Explanatory = () => {
  return (
    <div className="h-full border ml-2 rounded-xl bg-neutral-300 overflow-y-scroll">
        <Descriptive />
        <Layers />
        <Descriptive />
    </div>
  );
};
