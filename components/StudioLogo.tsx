import Image from "next/image";
import React from "react";

export default function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        src="https://ivaylotsochev.com/headless_new_logo.png"
        height={50}
        width={50}
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
