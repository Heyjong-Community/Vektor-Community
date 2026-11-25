import { ChevronDown, LogOut, UserRound } from 'lucide-react';
import { NavLink } from 'react-router';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { SidebarTrigger } from '../ui/sidebar';

function NavDash() {
  return (
    <nav className='sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur sm:px-6'>
      <div className='flex items-center gap-3'>
        <SidebarTrigger className='size-9 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground' />
        <div className='hidden h-6 w-px bg-border sm:block' />
        <div className='hidden sm:block'>
          <p className='text-sm font-semibold tracking-tight text-foreground'>WargaHub</p>
          <p className='text-xs text-muted-foreground'>Administrasi komunitas</p>
        </div>
      </div>

      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type='button'
              id='profile'
              className='group flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-2 transition-colors hover:bg-muted'
            >
              <span className='flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground'>
                <UserRound className='size-4' aria-hidden='true' />
              </span>
              <span className='hidden text-left sm:block'>
                {/* <span className='block text-xs font-medium text-foreground'>{profileName}</span>
                <span className='block text-[10px] text-muted-foreground'>{profileRole}</span> */}
                <span className='block text-xs font-medium text-foreground'>Vira</span>
                <span className='block text-[10px] text-muted-foreground'>Admin</span>
              </span>
              <ChevronDown
                className='ml-1 size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180'
                aria-hidden='true'
              />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align='end'
            sideOffset={8}
            className='w-56 rounded-lg border-border bg-popover p-1.5 shadow-lg'
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className='px-3 py-2'>
                {/* <p className='text-sm font-medium text-foreground'>{profileName}</p>
                <p className='mt-0.5 text-xs text-muted-foreground'>{profileRole}</p> */}
                <p className='text-sm font-medium text-foreground'>Vira</p>
                <p className='mt-0.5 text-xs text-muted-foreground'>Admin</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='cursor-pointer rounded-md px-3 py-2 text-foreground focus:bg-muted focus:text-foreground'>
                <NavLink to='/dashboard/account' className='flex w-full items-center gap-3'>
                  <UserRound className='size-4 text-muted-foreground' aria-hidden='true' />
                  <span className='text-sm'>Profil</span>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem
                className='cursor-pointer rounded-md px-3 py-2 text-muted-foreground focus:bg-muted focus:text-foreground'
                onSelect={(event) => event.preventDefault()}
              >
                <DialogTrigger>
                  <span className='flex w-full items-center gap-3'>
                    <LogOut className='size-4' aria-hidden='true' />
                    <span className='text-sm'>Logout</span>
                  </span>
                </DialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent className='rounded-xl border-border bg-background sm:max-w-md'>
          <DialogHeader>
            <div className='mb-2 flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground'>
              <LogOut className='size-5' aria-hidden='true' />
            </div>
            <DialogTitle className='text-lg font-semibold'>Konfirmasi logout</DialogTitle>
            <DialogDescription>Apakah Anda yakin ingin keluar dari dashboard WargaHub?</DialogDescription>
          </DialogHeader>
          <DialogFooter className='mt-4 flex flex-row justify-end gap-2'>
            <DialogClose>
              <button
                type='button'
                className='rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted'
              >
                Batal
              </button>
            </DialogClose>
            <button
              type='button'
              //   disabled={isLoggingOut}
              //   onClick={handleLogout}
              className='rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60'
            >
              {/* {isLoggingOut ? 'Memproses...' : 'Logout'} */}
              Logout
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </nav>
  );
}

export default NavDash;
