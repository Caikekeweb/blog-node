import {
    Controller,
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    QueryParams,
	Redirect
} from "routing-controllers";

@Controller()
export class UserController {
    @Get("/users")
    getAll() {
        console.log('fd')
        return 'dafs';
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return "This action returns user #" + id;
    }

    @Post("/users")
    post(@Body() body: any, @QueryParams() query: any) {
        return body;
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }
}
