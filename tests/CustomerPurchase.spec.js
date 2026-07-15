import { test, expect } from '@playwright/test';

import LoginPage from '../pages/login.page';
import ThirdPartyPage from '../pages/thirdParty.page';
import ProductPage from '../pages/product.page';
import ProposalPage from '../pages/proposal.page';
import InvoicePage from '../pages/invoice.page';

test('End to End ERP Flow', async ({ page }) => {

    const login = new LoginPage(page);
    const thirdParty = new ThirdPartyPage(page);
    const product = new ProductPage(page);
    const proposal = new ProposalPage(page);
    const invoice = new InvoicePage(page);

    // Login
    await login.launchApplication();
    await login.login("admin", "admin");

    // Create Customer
    await thirdParty.createCustomer(
        "ABC Technologies",
        "abc@gmail.com",
        "9876543210"
    );

    // Create Product
    await product.createProduct(
        "Dell Laptop",
        "50000"
    );

    // Create Proposal
    await proposal.createProposal(
        "ABC Technologies",
        "Dell Laptop",
        "2"
    );

    // Validate Proposal
    await proposal.validateProposal();

    // Convert Proposal to Order
    await proposal.convertToOrder();

    // Create Invoice
    await invoice.createInvoice();

    // Validate Invoice
    await invoice.validateInvoice();

    // Record Payment
    await invoice.recordPayment(
        "Cash",
        "100000"
    );

    // Verify Payment Status
    await expect(
        page.locator("text=Paid")
    ).toBeVisible();

});