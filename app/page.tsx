import { AppButton } from "@/components/AppButton";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center ">
      <h1 className="text-app-h1 text-main-orange">home</h1>
      <AppButton variant="primary">SEE PRODUCT</AppButton>
      <AppButton variant="secondary">SEE PRODUCT</AppButton>
      <AppButton variant="tertiary">
        SHOP{" "}
        <ChevronRightIcon className=" text-main-orange stroke-[3px] size-4" />
      </AppButton>
    </div>
  );
}
