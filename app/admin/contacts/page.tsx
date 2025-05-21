"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Trash, Mail, Check } from "lucide-react"
import { getContacts, deleteContact, updateContact, initMockDataService } from "@/lib/mock-data-service"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState<any>(null)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    // Load contacts from the mock service
    setContacts(getContacts())
  }, [])

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      deleteContact(id)
      setContacts(getContacts()) // Refresh the list
      toast({
        title: "Contact deleted",
        description: "The contact has been deleted successfully.",
      })
    }
  }

  const markAsReplied = (id: number) => {
    updateContact(id, { status: "Replied" })
    setContacts(getContacts()) // Refresh the list
    toast({
      title: "Status updated",
      description: "The contact has been marked as replied.",
    })
  }

  const filteredContacts = contacts.filter(
    (contact: any) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Contact Messages</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search contacts..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSearchTerm("")}>All Messages</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("new")}>New</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("replied")}>Replied</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact: any) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="p-0 h-auto" onClick={() => setSelectedContact(contact)}>
                          {contact.subject}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>{selectedContact?.subject}</DialogTitle>
                          <DialogDescription>
                            From: {selectedContact?.name} ({selectedContact?.email})
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 border-y my-4">
                          <p>{selectedContact?.message}</p>
                        </div>
                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            onClick={() => {
                              window.location.href = `mailto:${selectedContact?.email}?subject=Re: ${selectedContact?.subject}`
                            }}
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Reply via Email
                          </Button>
                          {selectedContact?.status === "New" && (
                            <Button onClick={() => markAsReplied(selectedContact.id)}>
                              <Check className="mr-2 h-4 w-4" />
                              Mark as Replied
                            </Button>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>{contact.date}</TableCell>
                  <TableCell>
                    <Badge variant={contact.status === "New" ? "default" : "outline"}>{contact.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          window.location.href = `mailto:${contact.email}?subject=Re: ${contact.subject}`
                        }}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                      {contact.status === "New" && (
                        <Button variant="ghost" size="icon" onClick={() => markAsReplied(contact.id)}>
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500"
                        onClick={() => handleDelete(contact.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
                  No contacts found. {searchTerm && "Try a different search term."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
