import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
export declare class ItemsService {
    private itemRepository;
    constructor(itemRepository: Repository<Item>);
    create(createItemDto: CreateItemDto): Promise<CreateItemDto & Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    update(id: number, updateItemDto: UpdateItemDto): string;
    remove(id: number): Promise<void>;
}
