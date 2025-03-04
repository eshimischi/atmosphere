export type TransactionStatus = "draft" | "verified" | "planned";
export enum TransactionDirection {
        WITHDRAW = 'WITHDRAW',
        DEPOSIT = 'DEPOSIT',
        TRANSFER = 'TRANSFER'
}
export interface ITransaction {
    id: number;
    date: string;
    title: string;
    currencyCode: string;
    payee: IPayee;
    direction: TransactionDirection;
    status: TransactionStatus;
    total: number;
    currency_code: string;
    description: string;
    linked: Record<string, any>[]
}

export interface ITransactionLine {
    id: number;
    category_id: number;
    title: string;
    currencyCode: string;
    is_split: boolean;
}

export interface ICategory {
    overAssigned: boolean;
    hasOverspent: any;
    hasFunded: any;
    hasUnderFunded: any;
    month: string;
    id?: number;
    name: string;
    color: string;
    available: number;
    left_from_last_month: number;
    budgeted: number;
}
export interface IAccount {
    label(arg0: string, label: any): unknown | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, { [key: string]: any; }> | null | undefined) | import("vue").VNodeArrayChildren;
    credit_limit: number;
    credit_closing_day: any;
    id: number;
    name: string;
    color: string;
    balance: number;
    reconciliation_last?: IReconciliation;
    account_detail_type_id: number;
    currency_code: string;
}

export interface IReconciliation {
    id: number;
    difference: number;
    amount: number;
    date: string;
    status: string;
}
export interface IPayee {
    id: number;
    name: string;
}

export const getCategoryLink = (itemId: number, type: 'categories' | 'groups' ) => {
    const types = {
        categories: 'filter[category_id]',
        groups: 'filter[group_id]'
    }

    const itemField = types[type] ?? types.groups;
    const currentSearch = location.search.replace('?', '&');
    return `/finance/lines?${itemField}=${itemId}${currentSearch}`;
}
