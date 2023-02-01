import Head from "next/head";
import React from "react";

import {Button} from "@/components/Button";

type LayoutProps = {
  children: React.ReactNode;
  className: string;
};

export const Layout = ({children, className}: LayoutProps) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Head>
        <title>APP</title>
        <meta content="The next generation app" name="My App" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <h2>Buttons</h2>
      <div className="">
        <br />
        <p>Button 1</p>
        <Button type="primary">New invoce</Button>
        <br />
        <p>Button 2</p>
        <button className="btn-secondary">Mark as Paid</button>
        <br />
        <p>Button 3</p>
        <button className="btn-quaternary-light">Edit</button>
        <button className="btn-quaternary-dark">Edit</button>
        <br />
        <p>Button 4</p>
        <button className="btn-quinary-light">Save as Draft</button>
        <button className="btn-quinary-dark">Save as Draft</button>
        <br />
        <p>Button 5</p>
        <button className="btn-error">Delete</button>
        <br />
        <br />
        <p>Button 6</p>
        <button className="btn-tertary">+ Add New Item</button>
        <br />
      </div>
      <main className="flex-1 mx-auto w-full grid max-w-screen-standar pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        {children}
      </main>
      <footer className="relative pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-screen-standar py-6 flex justify-center pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Made with ❤️ by WiFo
        </div>
      </footer>
    </div>
  );
};
