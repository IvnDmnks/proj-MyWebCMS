'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Media {
    url: string;
}

interface WebShopItem {
  id: string;
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemImage?: Media | null;
  itemAvailability: string;
}

export default function WebShopPage() {
    const [item, setItem] = useState<WebShopItem[]>([]);

    const onGetData = async () => {
        try {
        const res = await axios.get('/api/webshop', {params: { depth: 1 } }); // Payload API
        setItem(res.data.docs); // Payload JSON-ban a dokumentumok a "docs" mezőben vannak
        } catch (error) {
        console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        onGetData();
    }, []);

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl p-4 m-4 font-bold text-center border border-bgSecondary rounded-lg bg-bgSecondary text-textPrimary'>Example Webshop</h1>
            <div className='m-4 flex justify-end'>
                <Select>
                    <SelectTrigger className="w-[180px] hover:cursor-pointer hover:bg-bgSecondary">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="in_stock" className='hover:cursor-pointer hover:bg-bgSecondary'>In Stock</SelectItem>
                        <SelectItem value="by_price" className='hover:cursor-pointer hover:bg-bgSecondary'>By Price</SelectItem>
                        <SelectItem value="popularity" className='hover:cursor-pointer hover:bg-bgSecondary'>By Popularity</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex flex-wrap justify-center text-textPrymary'>
                {item.map((e) => (
                    <Card key={e.id} className="max-w-[20%] basis-1/4 m-4 box-border text-textPrimary">
                        <CardHeader>
                            <CardTitle>{e.itemName}</CardTitle>
                            <CardDescription>{e.itemDescription}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {e.itemImage && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={e.itemImage.url} alt={e.itemName} className="w-full h-auto mb-4" />
                            )}
                            <p className="text-lg text-textPrimary font-semibold">${e.itemPrice}</p>
                        </CardContent>
                        <CardFooter>
                           <Button className='hover:bg-bgSecondary hover:cursor-pointer'>Add to cart</Button> 
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}