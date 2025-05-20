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
import { MoreHorizontal, Search, Filter, Mail, Download, Trash, Eye } from "lucide-react"
import { getContacts, updateContact, deleteContact, initMockDataService, useAppStore, type AppState } from "@/lib/mock-data-service"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const storeContacts = useAppStore((state: AppState) => state.contacts)
  const refreshData = useAppStore((state: AppState) => state.refreshData)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    // Load contacts from the mock service
    refreshData()
  }, [refreshData])

  useEffect(() => {
    // Update local state when store changes
    setContacts(storeContacts.length > 0 ? storeContacts : getContacts())
  }, [storeContacts])

  const handleStatusChange = (id: number, status: string) => {
    updateContact(id, { status })
    setContacts(getContacts()) // Refresh the list
    toast({
      title: "Status Updated",
      description: `Contact status changed to ${status}`,
    })
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this contact submission?")) {
      deleteContact(id)
      setContacts(getContacts()) // Refresh the list
      toast({
        title: "Contact Deleted",
        description: "Contact has been deleted successfully",
      })
    }
  }

  const viewContactDetails = (contact: any) => {
    setSelectedContact(contact)
    setIsDialogOpen(true)
  }

  const exportToCSV = () => {
    try {
      // Filter contacts if search term is applied
      const dataToExport = searchTerm
        ? contacts.filter(
            (contact: any) =>
              contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
              contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
              contact.status.toLowerCase().includes(searchTerm.toLowerCase()),
          )
        : contacts

      // Create CSV headers
      let csvContent = "Name,Email,Subject,Message,Date,Status\n"

      // Add data rows
      dataToExport.forEach((contact: any) => {
        // Escape quotes in text fields and wrap in quotes
        const escapedMessage = contact.message ? `"${contact.message.replace(/"/g, '""')}"` : ""
        const escapedSubject = contact.subject ? `"${contact.subject.replace(/"/g, '""')}"` : ""

        csvContent += `"${contact.name}","${contact.email}",${escapedSubject},${escapedMessage},"${contact.date}","${contact.status}"\n`
      })

      // Create a blob and download link
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.setAttribute("href", url)
      link.setAttribute("download", `contacts-export-${new Date().toISOString().slice(0, 10)}.csv`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Export Successful",
        description: `${dataToExport.length} contacts exported to CSV`,
      })
    } catch (error) {
      console.error("Error exporting contacts:", error)
      toast({
        title: "Export Failed",
        description: "There was an error exporting contacts",
        variant: "destructive",
      })
    }
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
        <h1 className="text-3xl font-bold tracking-tight">Contact Submissions</h1>
        <Button variant="outline" onClick={exportToCSV}>
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
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
              <DropdownMenuItem onClick={() => setSearchTerm("")}>All Contacts</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("new")}>New</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("replied")}>Replied</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("archived")}>Archived</DropdownMenuItem>
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
                  <TableCell>{contact.subject}</TableCell>
                  <TableCell>{contact.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        contact.status === "New" ? "default" : contact.status === "Replied" ? "secondary" : "outline"
                      }
                    >
                      {contact.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => viewContactDetails(contact)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => viewContactDetails(contact)}>View Details</DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center">
                            <Mail className="mr-2 h-4 w-4" />
                            Reply
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(contact.id, "Replied")}>
                            Mark as Replied
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(contact.id, "Archived")}>
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(contact.id)}>
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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

      {/* Contact Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
            <DialogDescription>Contact submission information</DialogDescription>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                <p>{selectedContact.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p>{selectedContact.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Subject</h3>
                <p>{selectedContact.subject}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Message</h3>
                <p className="whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
                <p>{selectedContact.date}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <Badge
                  variant={
                    selectedContact.status === "New"
                      ? "default"
                      : selectedContact.status === "Replied"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {selectedContact.status}
                </Badge>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Close
                </Button>
                <Button className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Reply
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
