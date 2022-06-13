import {Controller, Get, Param, Req, Request} from '@nestjs/common';
import {ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger';


@ApiTags('hello')
@Controller()
export class AppController {
    constructor() {
    }

    // Get Role By Id
    @ApiResponse({
        status: 200,
        type: String,
    })
    @ApiResponse({
        status: 404,
    })
    @Get('/hello/:name')
    @ApiParam({
        name: 'name',
        required: true,
        type: String
    })
    findOneRole(@Param() params, @Req() request: Request) {
        console.log(request.headers);
        return 'Hello ' + params.name + '!';
    }
}
