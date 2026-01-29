"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isAdmin = pathname.startsWith("/admin");

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login"); // Redirect after logout
  }

  return (
    <div className="bg-white/80 shadow-sm sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={isAdmin ? "/admin" : "/"} className="text-xl font-bold">
          JobBoard
        </Link>

        {/* Right side */}
        {isAdmin ? (
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/admin/jobs" className="hover:text-blue-600">
              Jobs
            </Link>
            <Link href="/admin/post-job" className="hover:text-blue-600">
              Post Job
            </Link>
            <Link href="/admin/users" className="hover:text-blue-600">
              Users
            </Link>
            <Link href="/admin/applications" className="hover:text-blue-600">
              Applications
            </Link>
          </nav>
        ) : (
          <div className="flex items-center space-x-6 text-gray-700">
            <Link href="/jobs" className="font-medium hover:text-blue-600">
              Jobs
            </Link>

            {user ? (
              <>
                <Link
                  href="/profile"
                  className="font-medium hover:text-blue-600"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
