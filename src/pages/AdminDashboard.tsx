import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Package, ShoppingBag, Plus, Pencil, Trash2 } from "lucide-react";

const AdminDashboard = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editProduct, setEditProduct] = useState<any>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", price: "", original_price: "", category: "chaussures", image_url: "" });
  const { toast } = useToast();

  const fetchData = async () => {
    const [{ data: prods }, { data: ords }] = await Promise.all([
      supabase.from("products").select("*").order("created_at", { ascending: false }),
      supabase.from("orders").select("*").order("created_at", { ascending: false }).limit(20),
    ]);
    setProducts(prods || []);
    setOrders(ords || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleSave = async () => {
    const payload = {
      name: form.name,
      description: form.description,
      price: parseInt(form.price),
      original_price: form.original_price ? parseInt(form.original_price) : null,
      category: form.category,
      image_url: form.image_url || null,
    };

    if (editProduct) {
      const { error } = await supabase.from("products").update(payload).eq("id", editProduct.id);
      if (error) { toast({ title: "Erreur", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Produit modifié" });
    } else {
      const { error } = await supabase.from("products").insert(payload);
      if (error) { toast({ title: "Erreur", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Produit ajouté" });
    }
    setEditProduct(null);
    setShowAddForm(false);
    setForm({ name: "", description: "", price: "", original_price: "", category: "chaussures", image_url: "" });
    fetchData();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) { toast({ title: "Erreur", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Produit supprimé" });
    fetchData();
  };

  const openEdit = (product: any) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      description: product.description || "",
      price: product.price.toString(),
      original_price: product.original_price?.toString() || "",
      category: product.category,
      image_url: product.image_url || "",
    });
    setShowAddForm(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted">
        <div className="container px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Tableau de bord Admin</h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-lg"><Package className="h-6 w-6 text-primary" /></div>
                <div>
                  <p className="text-2xl font-bold">{products.length}</p>
                  <p className="text-sm text-muted-foreground">Produits</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-lg"><ShoppingBag className="h-6 w-6 text-primary" /></div>
                <div>
                  <p className="text-2xl font-bold">{orders.length}</p>
                  <p className="text-sm text-muted-foreground">Commandes récentes</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-lg"><ShoppingBag className="h-6 w-6 text-primary" /></div>
                <div>
                  <p className="text-2xl font-bold">{orders.reduce((s, o) => s + o.total_amount, 0).toLocaleString()} FCFA</p>
                  <p className="text-sm text-muted-foreground">Revenu total</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Management */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Gestion des Produits</CardTitle>
              <Dialog open={showAddForm} onOpenChange={(open) => { setShowAddForm(open); if (!open) { setEditProduct(null); setForm({ name: "", description: "", price: "", original_price: "", category: "chaussures", image_url: "" }); } }}>
                <DialogTrigger asChild>
                  <Button><Plus className="h-4 w-4 mr-2" />Ajouter un produit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editProduct ? "Modifier le produit" : "Ajouter un produit"}</DialogTitle>
                    <DialogDescription>Remplissez les informations du produit</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div><Label>Nom</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                    <div><Label>Description</Label><Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Prix (FCFA)</Label><Input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} /></div>
                      <div><Label>Prix original</Label><Input type="number" value={form.original_price} onChange={(e) => setForm({ ...form, original_price: e.target.value })} /></div>
                    </div>
                    <div><Label>Catégorie</Label>
                      <select className="w-full border rounded-md p-2" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                        <option value="chaussures">Chaussures</option>
                        <option value="vetements">Vêtements</option>
                        <option value="cosmetiques">Cosmétiques</option>
                      </select>
                    </div>
                    <div><Label>URL de l'image</Label><Input value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} /></div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleSave}>{editProduct ? "Sauvegarder" : "Ajouter"}</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-center py-8 text-muted-foreground">Chargement...</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom</TableHead>
                      <TableHead>Catégorie</TableHead>
                      <TableHead>Prix</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell className="capitalize">{product.category}</TableCell>
                        <TableCell>{product.price.toLocaleString()} FCFA</TableCell>
                        <TableCell>{product.in_stock ? "✅" : "❌"}</TableCell>
                        <TableCell className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => openEdit(product)}>
                            <Pencil className="h-3 w-3" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button size="sm" variant="destructive"><Trash2 className="h-3 w-3" /></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Supprimer ce produit ?</AlertDialogTitle>
                                <AlertDialogDescription>Cette action est irréversible.</AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Annuler</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDelete(product.id)}>Supprimer</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
